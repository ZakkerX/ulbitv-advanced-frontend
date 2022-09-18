import { classNames } from 'shared/lib/classNames'
import { AppLink } from "shared/ui";
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import css from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(css.navbar, {}, [className])}>
            <div className={css.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>            
        </div>
    );
}