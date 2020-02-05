'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-05 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-963';
    this._commitGIT = '1add7a163c2efe63d077fd8e9df44e4d4e95a096';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}