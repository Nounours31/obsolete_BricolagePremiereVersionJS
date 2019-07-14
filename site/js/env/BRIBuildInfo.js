'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-14 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-139';
    this._commitGIT = '806e6f6892515da9185f08639d165ae39821bc32';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}