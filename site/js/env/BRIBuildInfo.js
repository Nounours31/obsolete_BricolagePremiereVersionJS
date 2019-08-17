'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-17 20:00:03';
    this._versionBuild = 'jenkins-Bricolage-278';
    this._commitGIT = '563b509c622fac4fe5709416ef747b36d325bcd3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}