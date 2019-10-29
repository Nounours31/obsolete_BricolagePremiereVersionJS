'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-29 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-569';
    this._commitGIT = '57ed274dc4a49bfb913dc161d7e4bff8711fbf0e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}