import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ onPageChange }) => {
    return (
        <nav
            className="d-flex flex-column bg-light p-3"
            style={{
                width: '200px',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundColor: 'var(--sidebar-bg)',
                borderRight: '1px solid rgba(0,0,0,.05)',
                boxShadow: '2px 0 6px rgba(0,0,0,.04)',
            }}
        >
            <h4 className="mb-4"></h4>
            <button
                className="btn btn-outline-primary mb-2 text-start"
                onClick={() => onPageChange('HResource')}
            >
                이력서
            </button>
            <button
                className="btn btn-outline-primary mb-2 text-start"
                onClick={() => onPageChange('PortFolio')}
            >
                포트폴리오
            </button>
        </nav>
    );
};

export default NavBar;
