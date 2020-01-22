'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-22 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-909';
    this._commitGIT = '6c4a335ed01089718deb6d0b8853713db47b0ba5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}