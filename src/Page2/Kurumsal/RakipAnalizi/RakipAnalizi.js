import React from 'react';
import rakipImg from '../../../images/Page2_img/desktop-row-opponent-analysis.png'
import './RakipAnalize.css'
const RakipAnalizi = () => {
    return (
        <div>
            <div className="row w-100">
                <div className="col-12 col-md-12 col-lg-5">
                    <h4 className='rakip-analizi-header'>Profesyonellere Özel</h4>
                    <h1 className='rakip-analizi-title'>Rakip Analizi Yapın</h1>
                    <h6 className='rakip-analizi-des'>Markanızın şikayet yönetimi konusundaki başarısını, rakiplerinizle ve diğer sektördeki markalarla kıyaslayabilir, rekabette nerede olduğunuzu sayısal verilerle görebilirsiniz.
Rakiplerinizin şikayet verilerini analiz edebilir, bu verileri kullanarak potansiyel müşterilerinize yönelik stratejiler geliştirebilirsiniz.</h6>
<button className='rakip-analizi-btn'>Hemen Üye Ol</button>
                </div>
                <div className="col-12 col-md-12 col-lg-7">
                    <img src={rakipImg} className='w-100 rakip-img' alt="" />
                </div>
            </div>
        </div>
    );
};

export default RakipAnalizi;