import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyFooter = () => {
    return (
        <footer className="bg-dark text-light py-2" style={{ fontSize: '0.875rem' }}>
            <div className="container d-flex flex-wrap justify-content-center align-items-center text-center">
                <div className="me-3">
                    📞 010-3772-2956
                </div>
                <div className="me-3">
                    ✉️ ltk2956@naver.com
                </div>
                <div className="text-muted">
                    &copy; 2025 이태경
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;
