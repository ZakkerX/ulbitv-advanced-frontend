import { useState } from 'react';
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import css from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }
    
    return (
        <div className={classNames(css.sidebar, {[css.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={css.switchers}>
                <ThemeSwitcher/>
                {/* Language switcher */}
            </div>           
        </div>
    );
}