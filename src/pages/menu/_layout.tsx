import styles from './layout.less';
import { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Modal } from 'antd';
import Footer from '@/compontent/footer';
import LastLine from '@/compontent/lastLine';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
interface Props {
  dispatch: any;
}

const Page: React.FC<Props> = (props) => {
  const [userInfoPopDisabled, setUserInfoPopDisabled] = useState(false);
  useEffect(() => {
    console.log(props);

    props.dispatch({ type: 'globalTop/getUserinfo' });
  }, []);

  return (
    <div className={styles.app}>
      {props.children}
      <Footer />
    </div>
  );
};

function mapStateToProps(state: any) {
  const { token } = state.globalTop;
  return {
    token,
  };
}

let connectName = connect(mapStateToProps)(Page);
// connectName.wrappers = ['@/auth/login'];

export default connectName;
