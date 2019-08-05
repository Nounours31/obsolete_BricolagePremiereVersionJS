'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-05 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-227';
    this._commitGIT = '07d674f245fde240f4efbbcfc5d61f73095490f5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}