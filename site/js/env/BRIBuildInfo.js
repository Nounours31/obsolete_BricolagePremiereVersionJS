'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-25 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1284';
    this._commitGIT = 'fa5a38246c3419c232253f7d4d06958d8983b30b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}