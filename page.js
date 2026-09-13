'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Shell from '../../components/Shell';
import ProjectCard from '../../components/ProjectCard';

export default function SavedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/saved')
        .then((r) => r.json())
        .then(setProjects);
    }
  }, [status]);

  if (status === 'loading') return null;
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  return (
    <Shell>
      <section className="px-6 py-6">
        <div className="mb-7">
          <h1 className="text-[26px] font-extrabold text-white flex items-center gap-3"><span>🔖</span> المحفوظات</h1>
          <p className="text-[13.5px] text-[#8a8aa0] mt-1.5">الأكواد التي قمت بحفظها</p>
        </div>

        {!projects ? (
          <p className="text-[#5c5c72] text-sm">جارِ التحميل...</p>
        ) : projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[rgba(139,92,246,.25)] bg-[rgba(139,92,246,.03)] p-14 text-center">
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[rgba(139,92,246,.2)] to-transparent border border-[rgba(139,92,246,.3)] flex items-center justify-center text-3xl">🔖</div>
            <h2 className="text-[18px] font-bold text-white mb-2">لا توجد أكواد محفوظة</h2>
            <p className="text-[13px] text-[#8a8aa0] max-w-md mx-auto leading-relaxed">لم تقم بحفظ أي كود بعد. اضغط على النجمة ⭐ في أي بطاقة كود لإضافتها هنا.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} initialSaved={true} />
            ))}
          </div>
        )}
      </section>
    </Shell>
  );
}
