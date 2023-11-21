import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/359368314_1412265422651527_4931332174242258414_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pMqJY5DTM4sAX_NpeUA&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDSVS1mf47HGv5vziW-XlriN6aSUkshWc7YT8uLbAOp8w&oe=65613609"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>canduy</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Cấn Duy</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
