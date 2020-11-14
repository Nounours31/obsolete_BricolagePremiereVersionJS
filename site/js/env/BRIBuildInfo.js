'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-14 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-2097';
    this._commitGIT = '2d5f544f152f35ab1c75ea50db569ca5b6fce21a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}