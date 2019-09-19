'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-19 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-408';
    this._commitGIT = 'b7fdbed7717360af6aeae40d765eea8d0489f3f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}