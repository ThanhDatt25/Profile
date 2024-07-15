"use client";
import { ProjectCard } from "@/components/project-card";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  owner: {
    avatar_url: string;
  };
}

const RepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/repos");
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          setError("Failed to fetch repositories");
        }
      } catch (error) {
        setError("Failed to fetch repositories");
      }
    };

    fetchRepos();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {repos.map((repo, index) => (
          // <div
          //   key={repo.id}
          //   className="bg-secondary p-6rounded-lg shadow-md p-6 w-[200px]"
          // >
          //   <h2 className="text-xl font-semibold mb-2">
          //     <a
          //       href={repo.html_url}
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className=""
          //     >
          //       {repo.name}
          //     </a>
          //   </h2>
          //   <p className="mb-4">
          //     {repo.description || "No description available"}
          //   </p>
          //   <div className="flex items-center">
          //     <img
          //       src={repo.owner.avatar_url}
          //       alt="Owner Avatar"
          //       className="w-10 h-10 rounded-full mr-4"
          //     />
          //     <span className="">⭐ {repo.stargazers_count} stars</span>
          //   </div>
          // </div>
          <div key={index}>
            <ProjectCard
              title={repo.name}
              description={repo.description || "No description"}
              href={repo.html_url}
              link={repo.html_url}
              tags={[`⭐ ${repo.stargazers_count} stars`]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
