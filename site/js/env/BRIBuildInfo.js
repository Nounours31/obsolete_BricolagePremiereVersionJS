'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-17 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1253';
    this._commitGIT = '51af5cda73fcf04f44241be4b396ddbb0a94af6f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}