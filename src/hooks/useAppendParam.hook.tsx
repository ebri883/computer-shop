import { PATHS } from "@/constants/PATHS";
import { useRouter } from "next/router";
import { Url } from "url";

interface IAppendParam extends Pick<Url, "query"> {
  path: keyof typeof PATHS;
}

const useAppendParam = () => {
  const router = useRouter();
  const appendReplaceParam = ({ path, query }: IAppendParam) => {
    router.push(
      {
        pathname: PATHS[path],
        query: query,
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const appendInjectParam = ({ path, query }: IAppendParam) => {
    router.push(
      {
        pathname: PATHS[path],
        query: {
          ...router.query,
          ...(query as Record<string, string | number>),
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return { appendReplaceParam, appendInjectParam };
};

export default useAppendParam;
