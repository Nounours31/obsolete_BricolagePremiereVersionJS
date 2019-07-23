'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-23 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-177';
    this._commitGIT = 'e29cb64f0254104399a2cea89529ac3b8e51165d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}