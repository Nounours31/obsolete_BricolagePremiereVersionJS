'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-21 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-417';
    this._commitGIT = 'aef16a5c5539ae78a4e5a83c4b7f7f6029ae5295';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}