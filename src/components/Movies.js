import React, { Component } from 'react';
import Movie from './Movie';
class Movies extends Component {
    
    render() {
        const {movies = []} = this.props;
        return (
          <div className="movies">
            {movies.length ? (
              movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
              <section className="page_404">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 ">
                      <div className="col-sm-10 col-sm-offset-1  text-center">
                        <div className="four_zero_four_bg">
                          <h1 className="text-center ">404</h1>
                        </div>

                        <div className="content_box_404">
                          <h3 className="h2">Look like you're lost</h3>

                          <p>the data you are looking for not available!</p>

                          <a href="index.html" className="link_404">
                            Go to Home
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        );
    }
}

export default Movies;