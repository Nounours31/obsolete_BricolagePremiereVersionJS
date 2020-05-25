'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-25 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1404';
    this._commitGIT = 'f7fafa6a7088f212058fac29279f8bfe668e569d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}