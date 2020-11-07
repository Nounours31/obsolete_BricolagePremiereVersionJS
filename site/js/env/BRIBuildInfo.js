'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-07 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2068';
    this._commitGIT = 'd7d9451876aaa320110a8d6536d46c5cfbd6307f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}