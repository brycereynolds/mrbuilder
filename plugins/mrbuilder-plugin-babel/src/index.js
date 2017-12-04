const options  = require('../babel-config');
module.exports = ({
                      test = /\.jsx?$/,
                      include = [/\/test\/*/, /\/src\/*/, /\/public\/*/, /mrbuilder[^/]*\/src\/*/],
                      use = {
                          loader: 'babel-loader',
                          options
                      }
                  }, webpack) => {


    webpack.module.rules.push({
        test,
        include,
        use,
    });
    return webpack;
};