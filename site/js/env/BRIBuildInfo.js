'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-06 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1940';
    this._commitGIT = 'b8b3c92c51dd407bbb3f6026f28f8be504a03cb6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}