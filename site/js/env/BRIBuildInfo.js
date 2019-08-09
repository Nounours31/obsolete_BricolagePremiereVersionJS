'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-09 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-245';
    this._commitGIT = '9cd5cb864acf5e483a2b405c97a1dfdcda89e46f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}