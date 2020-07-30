'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-30 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1669';
    this._commitGIT = '67fd7278f4952d4a55fc3840cb81349d0c1c771b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}