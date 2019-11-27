'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-27 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-683';
    this._commitGIT = '84779d8f60775dc0a137b95f1bec66a1923cbc68';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}