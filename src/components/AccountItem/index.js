import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/originals/bb/c4/68/bbc468a8a70dd0c95f967bfd0c0d67c1.gif"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>123</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>12333</span>
            </div>
        </div>
    );
}

export default AccountItem;
