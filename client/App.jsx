import React, {
  useEffect,
  useState,
} from 'react';

import window from 'global/window';
import { connect } from 'react-redux';

import KeplerGl from '@kepler.gl/components';

const MAPBOX_TOKEN = process.env.MapboxAccessToken;

const App = () => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <KeplerGl
        mapboxApiAccessToken={MAPBOX_TOKEN}
        id="map"
        /*
         * Specify path to keplerGl state, because it is not mount at the root
         */
        getState={(state) => state.demo.keplerGl}
        width={windowDimension.width}
        height={windowDimension.height}
      />
    </div>
  );
};

const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);
