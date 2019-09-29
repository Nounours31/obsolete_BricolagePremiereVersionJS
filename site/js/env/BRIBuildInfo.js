'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-447';
    this._commitGIT = 'bb0c25232204001f32853ad3da854431f3717a92';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}