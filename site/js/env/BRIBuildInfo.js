'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-20 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1141';
    this._commitGIT = 'd1fa251e72b075d0f13698eac2cca73d1fe57162';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}