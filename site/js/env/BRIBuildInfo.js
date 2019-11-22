'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-22 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-666';
    this._commitGIT = '69536ad2464d71a77146b4942728f1940ca79b39';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}