'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-11 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1839';
    this._commitGIT = '9811dedd8618c56df0db7c02bc744599650433bb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}