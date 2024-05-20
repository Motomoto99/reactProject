import React from 'react'
import reactImage from "../Images/react.png";
import htmlcssjsImage from "../Images/htmlcssjs.jpg";
import djangoImage from "../Images/django.png";
import motonImage from "../Images/moton.PNG";

export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Motomoton</h1>

      <img src={motonImage} className="profileImage" />

      <p>
        Motomotonです。趣味でプログラミングやったり、音楽を聴いたり、ベースやギターを弾いてます。主にHTML/CSS/Javascript/React/Next.js/Django/メインに取り扱っています。好きなアーティストはONE OK ROCKです。
        5月にハッカソンに参加し、バックエンドを開発した。好きな漫画はNARUTOとハイキューです。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">自己紹介サイト</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">NULL</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">NULL</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={htmlcssjsImage} />
              <h4>HTML/CSS/JS</h4>
              <p>HTML/CSS/JSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={djangoImage} />
              <h4>django</h4>
              <p>djangoがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}
