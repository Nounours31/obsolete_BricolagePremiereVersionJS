'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-08 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1950';
    this._commitGIT = '73a4a5709f5c0b39009d554a78d4f658e456d4b4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}