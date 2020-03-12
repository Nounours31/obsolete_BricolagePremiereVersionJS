'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-12 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1107';
    this._commitGIT = 'f26f81ff51e6c12a8cd80efa1bf6f5c101a61ec1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}