import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/359368314_1412265422651527_4931332174242258414_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pMqJY5DTM4sAX_NpeUA&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDSVS1mf47HGv5vziW-XlriN6aSUkshWc7YT8uLbAOp8w&oe=65613609"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>canduy</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Cấn Duy</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
