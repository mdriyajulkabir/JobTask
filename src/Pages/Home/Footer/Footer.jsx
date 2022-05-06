import React from "react";
import footerLogo from "../../../images/logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <a href="#home" title="Ana Sayfa">
        <img src={footerLogo} alt="Şikayetvar" className="footer-img" />
      </a>
      <div className="row footer-primary">
        <div className="col-lg-9 col-sm-12 col-md-12 order-lg-0 order-md-0 order-sm-1 order-1">
          <ul className="link-primary">
            <li>
              <a href="#hakkımızda" title="Hakkımızda">
                About Us
              </a>
            </li>
            <li>
              <a href="#Markalar İçin" title="Markalar İçin">
                For Brands
              </a>
            </li>
            <li>
              <a href="#blog" title="blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#Ürün Rehberi" title="Ürün Rehberi">
               Product Guide
              </a>
            </li>
            <li>
              <a href="#Sıkça Sorulan Sorular" title="Sıkça Sorulan Sorular">
                Frequently Asked Question
              </a>
            </li>
            <li>
              <a href="#İletişim" title="İletişim">
                Communication
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xxl-3 col-lg-12 col-md-12 col-sm-12 social-media order-lg-1 order-md-1 order-sm-0 order-0 ">
          <a href="#instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#youtube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#linkedin">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-secondary row">
        <div className="col-lg-4 col-sm-12">
          <h4>Complaints</h4>
          <ul>
            <li>
              <a
                href="#Akbank Haksız Kredi Kartı Ücreti Kesintisi"
                title="Akbank Haksız Kredi Kartı Ücreti Kesintisi">
                Akbank Haksız Kredi Kartı Ücreti Kesintisi
              </a>
            </li>
            <li>
              <a
                href="#BTCTURK Geç İşlem Yapıyor"
                title="BTCTURK Geç İşlem Yapıyor">
                BTCTURK Geç İşlem Yapıyor
              </a>
            </li>
            <li>
              <a
                href="Akbank Artı Para Onaylandı Kullandırım Beklemede Kullanamıyorum."
                title="Akbank Artı Para Onaylandı Kullandırım Beklemede Kullanamıyorum.">
                Akbank Artı Para Onaylandı Kullandırım Beklemede Kullanamıyorum.
              </a>
            </li>
            <li>
              <a
                href="#Fibabanka İnternet Bankacılığına Giriş Yapamıyorum"
                title="Fibabanka İnternet Bankacılığına Giriş Yapamıyorum">
                Fibabanka İnternet Bankacılığına Giriş Yapamıyorum
              </a>
            </li>
            <li>
              <a
                href="#Akbank İnternetten Ve SMS İle Kredi Başvurusu
"
                title="Akbank İnternetten Ve SMS İle Kredi Başvurusu
">
                Akbank İnternetten Ve SMS İle Kredi Başvurusu
              </a>
            </li>
            <li>
              <a
                href="#Exxen Üyelik İptali Problemi"
                title="Exxen Üyelik İptali Problemi">
                Exxen Üyelik İptali Problemi
              </a>
            </li>
            <li>
              <a
                href="#Exxen İzinsiz Para Kesilmesi"
                title="Exxen İzinsiz Para Kesilmesi">
                Exxen İzinsiz Para Kesilmesi
              </a>
            </li>
            <li>
              <a
                href="#Kiğılı Giyim Kığılıya Teşekkür Ediyorum
              "
                title="Kiğılı Giyim Kığılıya Teşekkür Ediyorum
              ">
                Kiğılı Giyim Kığılıya Teşekkür Ediyorum
              </a>
            </li>
            <li>
              <a
                href="#Exxen Deneme Sürecinde İptal Ettiğim Halde Para Çekilmiş"
                title="Exxen Deneme Sürecinde İptal Ettiğim Halde Para Çekilmiş">
                Exxen Deneme Sürecinde İptal Ettiğim Halde Para Çekilmiş
              </a>
            </li>
            <li>
              <a
                href="#Akbank Üyelik Ücreti Kart Aidatı"
                title="Akbank Üyelik Ücreti Kart Aidatı">
                Akbank Üyelik Ücreti Kart Aidatı
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-12">
          <h4>Brands</h4>
          <ul>
            <li>
              <a href="#CK Boğaziçi Elektrik" title="CK Boğaziçi Elektrik">
                CK Boğaziçi Elektrik
              </a>
            </li>
            <li>
              <a href="#ECA" title="ECA">
                ECA
              </a>
            </li>
            <li>
              <a href="#Birxy" title="Birxy">
                Birxy
              </a>
            </li>
            <li>
              <a href="#Tavuk Dünyası" title="Tavuk Dünyası">
                Tavuk Dünyası
              </a>
            </li>
            <li>
              <a href="#Mynet" title="Mynet">
                Mynet
              </a>
            </li>
            <li>
              <a href="#Trendyol Express" title="Trendyol Express">
                Trendyol Express
              </a>
            </li>
            <li>
              <a href="#Playweez" title="playweez">
                Playweez
              </a>
            </li>
            <li>
              <a href="#Bosch" title="Bosch">
                Bosch
              </a>
            </li>
            <li>
              <a href="#Bimcell" title="Bimcell">
                Bimcell
              </a>
            </li>
            <li>
              <a href="#hsbc" title="HSBC">
                HSBC
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-12">
          <h4>Most Wanted</h4>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <a href="#Modaniasa" title="Modaniasa">
                    Modaniasa
                  </a>
                </li>
                <li>
                  <a href="#Amazon" title="Amazon">
                    Amazon
                  </a>
                </li>
                <li>
                  <a href="#LCW" title="LCW">
                    LCW
                  </a>
                </li>
                <li>
                  <a href="#Cimir" title="Cimir">
                    Cimir
                  </a>
                </li>
                <li>
                  <a href="#N11" title="N11">
                    N11
                  </a>
                </li>
                <li>
                  <a href="#A101" title="A101">
                    A101
                  </a>
                </li>
                <li>
                  <a href="#Trendyol" title="Trendyol">
                    Trendyol
                  </a>
                </li>
                <li>
                  <a href="#Vatan Bilgisayar" title="Vatan Bilgisayar">
                    Vatan Bilgisayar
                  </a>
                </li>
                <li>
                  <a href="#Aker" title="Aker">
                    Aker
                  </a>
                </li>
                <li>
                  <a href="#Paribu" title="Paribu">
                    Paribu
                  </a>
                </li>
                <li>
                  <a href="#Hepsiburada" title="Hepsiburada">
                    Hepsiburada
                  </a>
                </li>
                <li>
                  <a href="#Arçelik" title="Arçelik">
                    Arçelik
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <a href="#Vestel" title="Vestel">
                    Vestel
                  </a>
                </li>
                <li>
                  <a href="#Aras Kargo" title="Aras Kargo">
                    Aras Kargo
                  </a>
                </li>
                <li>
                  <a href="#Migros" title="Migros">
                    Migros
                  </a>
                </li>
                <li>
                  <a href="#Numara" title="Numara">
                    Numara Sorglama
                  </a>
                </li>
                <li>
                  <a href="#ETSTur" title="ETS Tur">
                    ETS Tur
                  </a>
                </li>
                <li>
                  <a href="#Vodafone" title="Vodafone">
                    Vodafone
                  </a>
                </li>
                <li>
                  <a href="#Farmasi" title="Farmasi">
                    Farmasi
                  </a>
                </li>
                <li>
                  <a href="#Getir" title="Getir">
                    Getir
                  </a>
                </li>
                <li>
                  <a href="#Huawei" title="Huawei">
                    Huawei
                  </a>
                </li>
                <li>
                  <a href="#Tatilbudur" title="Tatilbudur">
                    Tatilbudur
                  </a>
                </li>
                <li>
                  <a href="#Binance" title="Binance">
                    Binance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <h4>Comparisons</h4>
          <ul>
            <li>
              <a
                href="#Bellima Tur vs İzmir Gezi Fırsatları"
                title="Bellima Tur vs İzmir Gezi Fırsatları">
                Bellima Tur vs İzmir Gezi Fırsatları
              </a>
            </li>
            <li>
              <a
                href="#Barum Lastik vs Starmaxx"
                title="Barum Lastik vs Starmaxx">
                Barum Lastik vs Starmaxx
              </a>
            </li>
            <li>
              <a href="#Baymak vs GREE Klima" title="Baymak vs GREE Klima">
                Baymak vs GREE Klima
              </a>
            </li>
            <li>
              <a
                href="#Dinar Bakar Güzellik Salonu vs Linemed Beauty"
                title="Dinar Bakar Güzellik Salonu vs Linemed Beauty">
                Dinar Bakar Güzellik Salonu vs Linemed Beauty
              </a>
            </li>
            <li>
              <a
                href="#Medicana Hospitals vs Özel Ege Şehir Hastanesi"
                title="Medicana Hospitals vs Özel Ege Şehir Hastanesi">
                Medicana Hospitals vs Özel Ege Şehir Hastanesi
              </a>
            </li>
            <li>
              <a href="#Luxell vs Simfer" title="Luxell vs Simfer">
                Luxell vs Simfer
              </a>
            </li>
            <li>
              <a
                href="#Alnus Yatırım vs İnfo Menkul Kıymetler"
                title="Alnus Yatırım vs İnfo Menkul Kıymetler">
                Alnus Yatırım vs İnfo Menkul Kıymetler
              </a>
            </li>
            <li>
              <a href="#Apple vs Xiaomi" title="Apple vs Xiaomi">
                Apple vs Xiaomi
              </a>
            </li>
            <li>
              <a
                href="#Boğaziçi Vip vs Küpkök Eğitim Kurumları"
                title="Boğaziçi Vip vs Küpkök Eğitim Kurumları">
                Boğaziçi Vip vs Küpkök Eğitim Kurumları
              </a>
            </li>
            <li>
              <a
                href="#Özbay Mobilya vs Rapsodi Mobilya"
                title="Özbay Mobilya vs Rapsodi Mobilya">
                Özbay Mobilya vs Rapsodi Mobilya
              </a>
            </li>
            <li>
              <a href="#Tüm Karşılaştırmalar" title="Tüm Karşılaştırmalar">
                All Comparisons
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div>
          <ul className="d-flex">
            <li className="pe-3">
              <a href="#gizlilik">Security</a>
            </li>
            <li>
              <a href="#gizlilik">Terms Of Use</a>
            </li>
          </ul>
        </div>
        <div>
          <span>&copy;2022 Complaints. All right reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
