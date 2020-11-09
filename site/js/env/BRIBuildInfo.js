'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-09 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2076';
    this._commitGIT = '94af74d697a00e703fdf0d73b8fd0f811682ee3e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}