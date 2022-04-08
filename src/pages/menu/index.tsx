import { useEffect } from 'react';
import { history } from 'umi';

interface Props {}

const Page: React.FC<Props> = (props) => {
  useEffect(() => {
    history.replace('/menu/homePage');
  }, []);
  return <></>;
};

export default Page;
