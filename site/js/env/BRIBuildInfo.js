'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-10 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1343';
    this._commitGIT = '719b5efeb8e5ca6dffd1a272d19dc8891bdec776';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}