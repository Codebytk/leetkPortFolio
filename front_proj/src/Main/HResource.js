import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import leeImg from './../img/leeImg.jpg';

const HResource = () => {
    return (
        <div className="container py-4">
            <h2 className="mb-4 border-bottom pb-1">노력하는 개발자 이태경입니다.</h2>

            {/* 상단: 프로필 + 기본 정보 */}
            <div className="row mb-5">
                {/* 프로필 이미지 */}
                <div className="col-md-3 text-center">
                    <img
                        src={leeImg}
                        alt="프로필"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                </div>

                {/* 개인정보 */}
                <div className="col-md-9">
                    <ul className="list-unstyled fs-5">
                        <li><strong>이름:</strong> 이태경</li>
                        <li><strong>이메일:</strong> ltk2956@naver.com</li>
                        <li><strong>연락처:</strong> 010-3772-2956</li>
                        <li><strong>주소:</strong> 경기도 고양시 덕양구 화정동</li>
                    </ul>
                </div>
            </div>
            <div className="mb-5">
                <h4 className="mb-3">기술 스택</h4>
                <div>
                    {[
                        'JAVA',
                        'Spring',
                        'Springboot',
                        'Oracle',
                        'MySQL',
                        'JSP',
                        'Linux',
                        'WebSquare',
                        'JavaScript',
                        'React',
                        'Git',
                        'SVN'
                    ].map((tech) => (
                        <span key={tech} className="badge bg-primary me-2 mb-2">{tech}</span>
                    ))}
                </div>
            </div>
            {/* 학력 */}
            <div className="mb-5">
                <h4 className="mb-3">학력사항</h4>
                <div className="border rounded p-3">
                    <h5 className="mb-1">아세아 항공 직업전문학교</h5>
                    <p className="mb-1 text-muted">비파괴 검사학과 | 2018.03 ~ 2020.02</p>
                    <p className="mb-0">전문학사 졸업</p>
                </div>
                <div className="border rounded p-3">
                    <h5 className="mb-1">백양고등학교</h5>
                    <p className="mb-1 text-muted">인문계 | 2015.03 ~ 2018.02</p>
                    <p className="mb-0">고등학교 졸업</p>
                </div>
            </div>

            {/* 자격사항 */}
            <div className="mb-5">
                <h4 className="mb-3">자격사항</h4>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        정보처리산업기사
                        <span className="text-muted">2025.06 취득</span>
                    </li>
                </ul>
            </div>

            {/* 경력 */}
            <div className="mb-5">
                <h4 className="mb-3">경력</h4>
                <div className="border rounded p-3 bg-light">
                    <h5 className="mb-1">디브렉션(주)
                    </h5>
                    <p className="mb-1 text-muted">백앤드 개발자 | 2023.11 ~ 2025.05(1 년 6 개월)</p>
                    <ul className="mb-0">
                        <li>TSMS 시스템 유지보수</li>
                        <li>GSMS 시스템 유지보수</li>
                        <li>Bxhelper 개발, 유지보수</li>
                        <li>StoryPay 개발</li>
                        <li>교육 환경 관리 개발</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HResource;
