'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1047';
    this._commitGIT = '1bb382b4356046d5c450288e54b909dfd5a74c7a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}