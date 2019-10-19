'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-19 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-528';
    this._commitGIT = '357f888e0eb2a98cf7f86c1a7b0b324b5bf44934';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}