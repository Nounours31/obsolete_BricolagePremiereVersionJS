'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-11 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-252';
    this._commitGIT = 'dbbc1fd81d7fd84434f917ae1dd5bb25d0ffe967';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}