'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-555';
    this._commitGIT = '8b5b42fd4002f9e98785419ddd9ecdccda5895e6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}