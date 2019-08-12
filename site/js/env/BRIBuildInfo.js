'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-12 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-255';
    this._commitGIT = '237e2faeef5ccce9d3203167fb12001376787088';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}