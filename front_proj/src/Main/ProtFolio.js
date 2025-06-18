import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import proj1 from '../img/proj1.png';
import proj2 from '../img/proj2.png';
import proj3 from '../img/proj3.png';
import proj4 from '../img/proj4.png';
import proj5 from '../img/proj5.png';

const PortFolio = () => {
  const [portfolioItems] = useState([
    {
      createId: 1,
      peopleCnt: 6,
      projectName: 'TSMS',
      imgUrl: proj1,
      contents: '해당 프로젝트는 TGS 의 교육청 단말 보급 사업 주요 업무 시스템입니다.',
      stackProj: [{ stack: 'Spring' }, { stack: 'MyBatis' }, { stack: 'linux' }, { stack: 'WebSquare' }, { stack: 'mariaDB' }],
    },
    {
      createId: 2,
      peopleCnt: 6,
      projectName: 'GSMS',
      imgUrl:proj2,
      contents: '해당 프로젝트는 TSMS 의 경기도 교육청 버전이고 해당 프로젝트는 폐쇠망에서 진행 했기 때문에 TSMS 와 공통 데이터 연계해주는 작업을 진행했습니다.',
      stackProj: [{ stack: 'Spring' },{ stack: 'SpringBoot' }, { stack: 'MyBatis' }, { stack: 'linux' }, { stack: 'WebSquare' }, { stack: 'mariaDB' }],
    },
    {
      createId: 3,
      peopleCnt: 4,
      projectName: 'BxtHelp',
      imgUrl: proj3,
      contents: 'BxtSolution 회사의 CSR 처리 프로그램 입니다. 해당 프록젝트는 윈도우환경에서 반영을 했으며 담당자로서 개발부터 유지보수까지 참여했습니다.',
      stackProj: [{ stack: 'Spring' },{ stack: 'JSP' }, { stack: 'MyBatis' }, { stack: 'mariaDB' }],
    },
    {
      createId: 4,
      peopleCnt: 2,
      projectName: 'StoryPay',
      imgUrl: proj4,
      contents: '선결제 시스템입니다. 저는 웹으로는 결제정보 관리 페이지, FireBase 를 사용한 메세지, 회원관리 기능을 구현하였고 앱으로는 사용자 계정 찾기 문자 보내기 기능등을 구현했습니다.',
      stackProj: [{ stack: 'Firebase' }, { stack: 'React Native' }, { stack: 'Springboot' }, { stack: 'Spring' }, { stack: 'JPA' }, { stack: 'Mybatis' }, { stack: 'JSP' }, { stack: 'mariaDB' }],
    },
    {
      createId: 5,
      peopleCnt: 7,
      projectName: '교육환경관리 프로그램',
      imgUrl:proj5,
      contents: '해당 프로젝트는 가용재고 관리 등 자산관리를 하는데 편의성을 제공해 주는 프로그램 입니다. 저는 계층형 조직관리 개발, 자산관리를 맡아서 개발했습니다.',
      stackProj: [{ stack: 'Spring' }, { stack: 'MyBatis' }, { stack: 'mariaDB' }],
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      style={{
        marginLeft: '20px',
        padding: '40px',
        maxWidth: '1200px',
        marginRight: 'auto',
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: '#fef6f9',
        borderRadius: '12px',
        marginBottom: '100px',
      }}
    >
      <h2 className="mb-4 text-center">포트폴리오</h2>
      {portfolioItems.length > 0 ? (
        <Slider {...settings}>
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="px-2">
              <div
                className="card shadow-sm"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  minHeight: '350px',
                }}
              >
                <img
                  src={item.imgUrl}
                  alt={item.projectName}
                  style={{
                    width: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    width: '50%',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h5 className="card-title" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
                      {item.projectName}
                    </h5>
                    <p className="card-text" style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                      <strong>프로젝트 설명:</strong> <br />{item.contents}
                    </p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                      <strong>투입 인원:</strong> {item.peopleCnt}명
                    </p>
                  </div>

                  {item.stackProj && item.stackProj.length > 0 && (
                    <div>
                      <strong>사용 기술:</strong>
                      <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {item.stackProj.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              padding: '5px 10px',
                              backgroundColor: '#ffe0e6',
                              color: '#ff4d6d',
                              borderRadius: '16px',
                              fontSize: '0.9rem',
                            }}
                          >
                            {tech.stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">불러올 프로젝트가 없습니다.</p>
      )}

      <style>{`
        .slick-prev:before, .slick-next:before {
          color: #ff7f50;
          font-size: 30px;
        }
        .slick-prev {
          left: -40px;
          z-index: 1;
        }
        .slick-next {
          right: -40px;
          z-index: 1;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #ff7f50;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          color: #ff4500;
        }
      `}</style>
    </div>
  );
};

export default PortFolio;
