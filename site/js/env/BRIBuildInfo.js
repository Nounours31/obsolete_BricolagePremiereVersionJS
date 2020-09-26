'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-26 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1900';
    this._commitGIT = '8582d9e621656b7d60d612397bc6360ae77a635c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}