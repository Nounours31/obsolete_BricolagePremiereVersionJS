'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-24 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1040';
    this._commitGIT = '5ce46b51d9dab31fc3a70e649236eca8eb46834c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}